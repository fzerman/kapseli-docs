# Command Manager
Command Manager provides you deep extensibility with an API. You can create new commands or use built-in commands. Also, you can listen to other commands with the event manager.

## Events
* `run`
* `stop`
* `run:{commandName}:before`
* `run:{commandName}:after`
* `stop:{commandName}:before`
* `stop:{commandName}:after`
* `abort`
* `abort:{commandName}`

## Functions
* add
* get
* has
* getAll
* run
* stop
* isActive
* getActive
