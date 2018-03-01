<h3 align="center">🎊 Partypack 🎊</h3>
<h6 align="center">A pack of plugins that add some 🎉 to your PostCSS development</h6>

So whats included? glad you asked…

## Easings

This plugins allows you to use all the easings on easings.net, just like you
would use the built in ones. Neat!
[Plugin](https://github.com/postcss/postcss-easings)

## Extend

Use the @extend at-rule and functional selectors in CSS. Great!
[Plugin](https://github.com/jonathantneal/postcss-extend-rule)

## Family

Family is a set of 26 smart Postcss functions which will help you to manage the
style of :nth-child'ified elements, in an easy and classy way. Why not?
[Plugin](https://github.com/mpeutz/postcss-family)

## Property Lookup

Reference previously declared values without the use of variables.
[Plugin](https://github.com/simonsmith/postcss-property-lookup)

## Short

lets you use advanced shorthand properties in CSS. Sweet.
[Plugin](https://github.com/jonathantneal/postcss-short)

## Defaults

| Plugin Name    | Default |
| -------------- | ------- |
| easings        | `true`  |
| extendRule     | `true`  |
| family         | `true`  |
| propertyLookup | `true`  |
| shorthand      | `true`  |

You can easily disable individual plugins in the following manner:

```
// config file
postcss-partypack: {
  "easings": false,
}
```
