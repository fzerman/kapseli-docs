---
id: command-manager
title: Command Manager
sidebar_title: Command Manager
---

Command Manager provides you deep extensibility with an API. You can create new commands or use built-in commands. Also, you can listen to other commands with the event manager.

## Events {#events}

- `run` => Fires when any command run.
- `stop` => Fires when any command stop.
- `run:{commandName}:before` => Fires before `commandName` command running.
- `run:{commandName}:after` => Fires after `commandName` command running.
- `stop:{commandName}:before` => Fires before `commandName` command stoping.
- `stop:{commandName}:after` => Fires after `commandName` command stoping.
- `abort` => Fires when any command abort.
- `abort:{commandName}` => Fires when `commandName` command abort.

## Functions {#functions}

#### add(command,cb) {#addcommandcb}

Parameters:

- command as `String`
- cb as `Function`

It registers command with callback.

Returns anything.

#### get(command) {#getcommand}

Parameters:

- command as `String`

It returns command.

Returns `Command Object` or `false`.

#### has(command) {#hascommand}

Parameters:

- command as `String`

It checks command there is.

Returns `Boolean`.

#### getAll() {#getall}

No Parameters

It returns `Command Object` Array.

Returns [`Command Object`].

#### run(command,args) {#runcommandargs}

Parameters:

- command as `String`
- args as `Any`

It runs `command` command.

Returns if there is no command `false` or `None`.

#### stop(command,args) {#stopcommandargs}

Parameters:

- command as `String`
- args as `Any`

It stops `command` command.

Returns if there is no command `false` or `None`.

#### isActive(command) {#isactivecommand}

Parameters:

- command as `String`

It checks command is active.

Returns `Boolean`.

#### getActives() {#getactives}

No Parameter

It returns all active commands.

Returns [`Command Object`].
