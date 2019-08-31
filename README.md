# ![JSON](images/icon@4x.png)

Adobe XD plugin to export Artboards and interactions as JSON

## Usage

1. Select Plugins -> JSON Export
2. Choose the filename
3. Done!

## Example Output

Output looks like below for a simple design with two artboards linking between each other (go to Menu, can go back to Home).
The "screens" array contains the Artboards in your XD file, "edges" contains interactions linking between the screens as directed edges of {source GUID} -> {target GUID}.

```json
{
  "screens": [
    {
      "guid": "c77559d54862410fa5e0ab01e822d257",
      "name": "Home",
      "type": "Artboard"
    },
    {
      "guid": "bcc81496e1a1478d98e39197b7e345c4",
      "name": "Menu",
      "type": "Artboard"
    },
  ],
  "edges": {
    "c77559d54862410fa5e0ab01e822d257": [
      "bcc81496e1a1478d98e39197b7e345c4"
    ],
    "bcc81496e1a1478d98e39197b7e345c4": [
      "c77559d54862410fa5e0ab01e822d257"
    ]
  }
}
```

## Support

For support, feature request, etc. please submit an issue to this repository, or send an email to supertanner@gmail.com
