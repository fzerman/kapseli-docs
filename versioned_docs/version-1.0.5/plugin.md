---
id: plugins
title: Plugins
sidebar_label: Plugins
---

You can find official plugins on [ecosystem page](https://kapseli.stingydeveloper.com/ecosystem). Also, you can write your custom plugins.

## Writing a plugin {#writing-a-plugin}

Kapseli plugins consist of a fuunction. This function includes 2 parameters app and plugin options.

```js
Kapseli.plugins.add("plugin-name", (app, options) => {
  // plugin codes
});
```

## Registering a component {#registering-a-component}

```js
app.View.addComponent("COMPONENT-NAME", Component_Class);
```

## Registering a command {#registering-a-command}

```js
app.Command.add("command_name", command_function);
```

## Adding a event listener {#adding-a-event-listener}

```js
app.Event.on("event_name", event_listener_function);
```

You can read our [api documentation](https://kapseli.stingydeveloper.com/docs/api) for more details.
