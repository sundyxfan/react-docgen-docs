# react-docgen-docs

CLI tool that extracts information from React Components using [react-docgen](https://github.com/reactjs/react-docgen), transforms that information into Markdown and adds it to your README file.

## Install

    $ npm install --save-dev react-docgen-docs

## Usage

    $ rdd <componentsDir> [options]
    // `rdd` is a shortcut for `react-docgen-docs`


1. Add the delimiter in your README file to indicate where you want to insert the docs

    ```markdown
    <!-- react-component-api -->
    ```

2. Then add a new task in your package.json to generate the docs. Note that you must specify the path for the readme and for the components to be documented.

    ```json
    "scripts": {
        "docs": "rdd src/ --readmeFile docs/README.md"
    }
    ```

### Configuration

#### --readmeFile

**Default:** `'./README.md'`

The path to the readme file where generated documentation is appended.

#### --delimiter

**Default:** `'react-component-api'`

Use a custom delimiter. Used to let the tool know where to place the docs in your readme.

This generates `<!-- react-component-api -->` and `<!-- react-component-api:end -->` delimiters.

#### --ext

**Default:** `['.js', '.jsx']`

File extensions to consider. Used by `react-docgen`.

#### --ignoreDir

**Default:** `['node_modules', 'bower_components']`

Folders to ignore. Used by `react-docgen`.
