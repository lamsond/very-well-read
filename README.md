# very-well-read

using data with gatsby tutorial

## overview

Gatsby can work with data from various sources

* WordPress
* Markdown
* CSV
* Databases

Unstructured Data vs GraphQL

## plugins

* Typography.js trying out *Kirkham* theme.
* *CSS-in-JS* library *Emotion*

## setting up metadata

* add a `siteMetadata` property to the `module.exports` object.
* use `graphql` to query this data
* page queries for pages
* `useStaticQuery` for non-page components

## source plugins help you pull data in

* add the `filesystem` plugin to make your path structure visible to gatsby
* use `http://127.0.0.1:8000/___graphql/` to work with *graphql* interactively.
* use `CTRL + space` to make drop-downs appear

## transformer plugins help you transform raw data brought in by source plugins
