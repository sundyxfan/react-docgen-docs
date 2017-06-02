## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Provide code examples and explanations of how to get the project.

### API
<!-- react-component-api -->
#### TabsNav
name | type | required | default | description
:--- | :--- | :--- | :--- | :---
items|arrayOf|true||

#### Tabs
name | type | required | default | description
:--- | :--- | :--- | :--- | :---
current|number|false|0|The index of the active pane
panes|arrayOf|false|[    {        title: &#x27;Pane 1&#x27;,        content: (&lt;strong&gt;{&#x27;Pane 1 content&#x27;}&lt;/strong&gt;)    },    {        title: &#x27;Pane 2&#x27;,        content: (&lt;strong&gt;{&#x27;Pane 2 content&#x27;}&lt;/strong&gt;)    }]|An array containing all the panes


#### Slider
name | type | required | default | description
:--- | :--- | :--- | :--- | :---
current|number|false|0|The index of the active pane
panes|arrayOf|false|{    title: &#x27;ddsdsd&#x27;,    content: &#x27;content test&#x27;}|An array containing all the \n panes
name|string|false||
<!-- react-component-api:end -->

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)