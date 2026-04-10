```sh
# with specified entries (e.g. in introdocs.config.json)
npx introdocs [...<entry id or dir>]

# without entries
npx introdocs <dir path> <repo URL>
```

<details>
<summary>Example of <i>introdocs.config.json</i></summary>

```
{
  "$schema": "https://unpkg.com/introdocs/schema.json",
  "baseColor": "purple",
  "favicon": "/assets/favicon.png",
  "append": {
    "body": "<script src=\"/assets/stats.js\"></script>"
  },
  "linkMap": {
    "https://github.com/org/package1": "/package1"
    "https://github.com/org/package2": "/package2"
  },
  "entries": [
    {
      "dir": "package1",
      "htmlTitle": "<a href=\"/\">Org</a> / Package 1",
      "repo": "https://github.com/org/package1",
      "nav": "/assets/nav_links.html"
    },
    {
      "dir": "package2",
      "htmlTitle": "<a href=\"/\">Org</a> / Package 2",
      "repo": "https://github.com/org/package2",
      "nav": "/assets/nav_links.html",
      "singlePage": true
    }
  ]
}
```

</details>

---

```html
<!-- introdocs-show-start --
Reveal during content generation
-- introdocs-show-end -->
```

```html
<!-- introdocs-hide-start -->
Hide during content generation
<!-- introdocs-hide-end -->
```
