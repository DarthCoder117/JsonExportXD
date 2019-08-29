const fs = require('uxp').storage.localFileSystem;
const interactions = require('interactions');
const {Artboard} = require('scenegraph');

function cleanGuid(guid) {
  return guid.replace(/-/g, '');
}

/**
 * Recursively convert scene graph nodes to a JSON object
 * @param {SceneNode} node The node to start with.
 * @return {Object} The SceneNode converted to a JSON object.
 */
function nodeToJSON(node) {
  let jsonOut = {
    guid: cleanGuid(node.guid),
    name: node.name,
    type: node.constructor.name,
    children: [],
  };

  node.children.forEach(function(childNode) {
    if (childNode instanceof Artboard) { // Only support outputting artboards for now
      let childJson = nodeToJSON(childNode);
      delete childJson.children; // Don't bother including children yet, cause we have no "full scene option implemented"
      jsonOut.children.push(childJson);
    }
  });

  return jsonOut;
}

/**
 * Convert interactions from XD to array of edges in JSON.
 * @param {Array} allInteractions XD interactions object.
 * @return {Array} interactions as a JSON array of edges.
 */
function convertInteractions(allInteractions) {
  let edges = {};

  allInteractions.forEach(function(interaction) {
    // Traverse upward until we find the parent Artboard
    let sourceScreen = interaction.triggerNode;
    while (sourceScreen.parent !== null && !(sourceScreen instanceof Artboard)) {
      sourceScreen = sourceScreen.parent;
    }
    const sourceGuid = cleanGuid(sourceScreen.guid);

    // Find destination edges
    let targets = edges[sourceGuid] || []; // Either merge into existing edge list, or create a new array
    interaction.interactions.forEach(function(targetInteraction) {
      const targetScreen = targetInteraction.action.destination;
      const targetGuid = cleanGuid(targetScreen.guid);
      if (targets.indexOf(targetGuid) == -1) {
        targets.push(cleanGuid(targetGuid));
      }
    });

    // Push edges to array and merge with existing edges
    edges[sourceGuid] = targets;
  });

  return edges;
}

/**
 * Main JSON export entry point
 */
async function exportJson(_, documentRoot) { 
  // Convert the scene graph to a JSON object
  const sceneGraphJson = nodeToJSON(documentRoot);
  // Convert the interactions to navigation flow edges
  const edgeJson = convertInteractions(interactions.allInteractions);

  // Generate final output object
  const jsonOut = {
    screens: sceneGraphJson.children || [],
    edges: edgeJson,
  };

  // Select and write to final output file
  const file = await fs.getFileForSaving('output.json');
  if (file) {
    file.write(JSON.stringify(jsonOut, null, 2));
  }
}

module.exports = {
  commands: {
    exportJson,
  }
};
