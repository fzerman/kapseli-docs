---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Setup {#setup}

For setup Kapseli, firstly, you should import Kapseli to your project. For details go to Installation Page.

```js
const App = Kapseli.init({
  // Your app configs..
});

App.render(); // This function is required.
```

`Kapseli.render(...)` is required for rendering and running all application constructions.

### Config Setup {#config-setup}

```js

const App = Kapseli.init({
  plugins: [], // you should push your registered plugins to enable these plugins.
  pluginOpts: {}, // If plugins you use have options, you can pass custom options on this property.
  view: {
    el: "#app", // this config is required. It should include application container element selector.
    data: {
      // your reactive datas...
    }
    methods: {
      // your functions for event listeners
    }
  },
  command: {}, // you can register your custom commands
  i18n: {}, // you can register to localize your application with language code.
  storage: {}, // you can register your custom storages. Also, you can customize this with plugins.
  event: {}, // you can register your custom events. these events doesn't run, if you don't connect them to built-in events or run manually.
  route: {} // you should register your pages with router id.
});
```

### Config Details {#config-details}

- [Event Manager](/docs/api/managers/event-manager/)
- [Storage Manager](/docs/api/managers/storage-manager/)
- [Command Manager](/docs/api/managers/command-manager/)
- [Route Manager](/docs/api/managers/route-manager/)
- [Plugin Manager](/docs/api/managers/plugin-manager/)
- [I18n](/docs/api/managers/i18n/)
