---
title: Product
date: 2021-12-18T11:10:36+08:00
draft: false
language: en
description: Tailwind Typography @tailwindcss/typography & Product
featured_image: ../assets/images/featured/featured-img-placeholder.png
---

## @tailwindcss/typography

[View on GitHub](https://github.com/tailwindlabs/tailwindcss-typography)!

Beautiful typographic defaults for HTML you don't control.

The official Tailwind CSS Typography plugin provides a set of product classes you can use to add beautiful typographic defaults to any vanilla HTML you don’t control, like HTML rendered from Markdown, or pulled from a CMS.

Tailwind CSS IntelliSense extension for Visual Studio Code

```
<article class="product lg:product-xl">
  {{ markdown }}
</article>
```

To see what it looks like in action, check out our [live demo](https://play.tailwindcss.com/uj1vGACRJA?layout=preview) on Tailwind Play.
​

## Installation

### Install the plugin from npm:

```
npm install -D @tailwindcss/typography
```

Then add the plugin to your tailwind.config.js file: tailwind.config.js

```
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

## Basic usage

Now you can use the product classes to add sensible typography styles to any vanilla HTML:

```
<article class="product lg:product-xl">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
</article>
```

## Choosing a gray scale

This plugin includes a modifier class for each of the five gray scales Tailwind includes by default so you can easily style your content to match the grays you’re using in your project.

```
<article class="product product-slate">
  {{ markdown }}
</article>
```

## Here are the classes that are generated using a totally default Tailwind CSS v2.0 build:

| Class                  | Gray scale |
| ---------------------- | ---------- |
| product-gray (default) | Gray       |
| product-slate          | Slate      |
| product-zinc           | Zinc       |
| product-neutral        | Neutral    |
| product-stone          | Stone      |

Modifier classes are designed to be used with the multi-class modifier pattern and must be used in conjunction with the base product class.

Always include the `product` class when adding a gray scale modifier

```
<article class="product product-stone">
  {{ markdown }}
</article>
```

To learn about creating your own color themes, read the adding custom color themes documentation.
​

## Applying a type scale

Size modifiers allow you to adjust the overall size of your typography for different contexts.

```
<article class="product product-xl">
  {{ markdown }}
</article>
```

### Five different typography sizes are included out of the box:

Class Body font size
| product-sm | Gray scale |
| ----------- | ----------- |
| product-gray (default) | 0.875rem (14px) |
| product-base (default) | 1rem (16px) |
| product-lg | 1.125rem (18px) |
| product-xl | 1.25rem (20px) |
| product-2xl | 1.5rem (24px) |
These can be used in combination with Tailwind’s breakpoint modifiers to change the overall font size of a piece of content at different viewport sizes:

```
<article class="product md:product-lg lg:product-xl">
  {{ markdown }}
</article>
```

Everything about the provided size modifiers has been hand-tuned by professional designers to look as beautiful as possible, including the relationships between font sizes, heading spacing, code block padding, and more.

Size modifiers are designed to be used with the multi-class modifier pattern and must be used in conjunction with the base product class.

Always include the `product` class when adding a size modifier

```
<article class="product product-lg">
  {{ markdown }}
</article>
```

To learn about customizing the included type scales, read the documentation on customizing the CSS.

## Adapting to dark mode

Each default color theme includes a hand-designed dark mode version that you can trigger by adding the product-invert class:

```
<article class="product dark:product-invert">
  {{ markdown }}
</article>
```

To learn about creating your own color themes, read the adding custom color themes documentation.

​
Element modifiers
Use element modifiers to customize the style of individual elements in your content directly in your HTML:

```
<article class="product product-img:rounded-xl product-headings:underline product-a:text-blue-600">
  {{ markdown }}
</article>
```

This makes it easy to do things like style links to match your brand, add a border radius to images, and tons more.

### Here’s a complete list of available element modifiers:

| Modifier                     | Target             |
| ---------------------------- | ------------------ |
| product-headings:{utility}   | h1, h2, h3, h4, th |
| product-lead:{utility}       | [class~="lead"]    |
| product-h1:{utility}         | h1                 |
| product-h2:{utility}         | h2                 |
| product-h3:{utility}         | h3                 |
| product-h4:{utility}         | h4                 |
| product-p:{utility}          | p                  |
| product-a:{utility}          | a                  |
| product-blockquote:{utility} | blockquote         |
| product-figure:{utility}     | figure             |
| product-figcaption:{utility} | figcaption         |
| product-strong:{utility}     | strong             |
| product-em:{utility}         | em                 |
| product-code:{utility}       | code               |
| product-pre:{utility}        | pre                |
| product-ol:{utility}         | ol                 |
| product-ul:{utility}         | ul                 |
| product-li:{utility}         | li                 |
| product-table:{utility}      | table              |
| product-thead:{utility}      | thead              |
| product-tr:{utility}         | tr                 |
| product-th:{utility}         | th                 |
| product-td:{utility}         | td                 |
| product-img:{utility}        | img                |
| product-video:{utility}      | video              |
| product-hr:{utility}         | hr                 |

When stacking these modifiers with other modifiers like hover, you most likely want the other modifier to come first:

```
<article class="product product-a:text-blue-600 hover:product-a:text-blue-500">
  {{ markdown }}
</article>
```

## Read the Tailwind CSS documentation on ordering stacked modifiers to learn more.

​
Overriding max-width
Each size modifier comes with a baked in max-width designed to keep the content as readable as possible. This isn’t always what you want though, and sometimes you’ll want the content to just fill the width of its container.

In those cases, all you need to do is add max-w-none to your content to override the embedded max-width:

```
<div class="grid grid-cols-4">
  <div class="col-span-1">
    <!-- ... -->
  </div>
  <div class="col-span-3">
    <article class="product max-w-none">
      {{ markdown }}
    </article>
  </div>
</div>
```

## Advanced topics

​
Undoing typography styles
If you have a block of markup embedded in some content that shouldn’t inherit the product styles, use the not-product class to sandbox it:

```
<article class="product">
  <h1>My Heading</h1>
  <p>...</p>

  <div class="not-product">
    <!-- Some example or demo that needs to be product-free -->
  </div>

  <p>...</p>
  <!-- ... -->
</article>
```

Note that you can’t nest new product instances within a not-product block at this time.
​

## Adding custom color themes

You can create your own color theme by adding a new key in the typography section of your tailwind.config.js file and providing your colors under the css key:

```
tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        pink: {
          css: {
            '--tw-product-body': theme('colors.pink[800]'),
            '--tw-product-headings': theme('colors.pink[900]'),
            '--tw-product-lead': theme('colors.pink[700]'),
            '--tw-product-links': theme('colors.pink[900]'),
            '--tw-product-bold': theme('colors.pink[900]'),
            '--tw-product-counters': theme('colors.pink[600]'),
            '--tw-product-bullets': theme('colors.pink[400]'),
            '--tw-product-hr': theme('colors.pink[300]'),
            '--tw-product-quotes': theme('colors.pink[900]'),
            '--tw-product-quote-borders': theme('colors.pink[300]'),
            '--tw-product-captions': theme('colors.pink[700]'),
            '--tw-product-code': theme('colors.pink[900]'),
            '--tw-product-pre-code': theme('colors.pink[100]'),
            '--tw-product-pre-bg': theme('colors.pink[900]'),
            '--tw-product-th-borders': theme('colors.pink[300]'),
            '--tw-product-td-borders': theme('colors.pink[200]'),
            '--tw-product-invert-body': theme('colors.pink[200]'),
            '--tw-product-invert-headings': theme('colors.white'),
            '--tw-product-invert-lead': theme('colors.pink[300]'),
            '--tw-product-invert-links': theme('colors.white'),
            '--tw-product-invert-bold': theme('colors.white'),
            '--tw-product-invert-counters': theme('colors.pink[400]'),
            '--tw-product-invert-bullets': theme('colors.pink[600]'),
            '--tw-product-invert-hr': theme('colors.pink[700]'),
            '--tw-product-invert-quotes': theme('colors.pink[100]'),
            '--tw-product-invert-quote-borders': theme('colors.pink[700]'),
            '--tw-product-invert-captions': theme('colors.pink[400]'),
            '--tw-product-invert-code': theme('colors.white'),
            '--tw-product-invert-pre-code': theme('colors.pink[300]'),
            '--tw-product-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-product-invert-th-borders': theme('colors.pink[600]'),
            '--tw-product-invert-td-borders': theme('colors.pink[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

See our internal style definitions for some more examples.
​

## Changing the default class name

If you need to use a class name other than product for any reason, you can do so using the className option when registering the plugin:

```
  tailwind.config.js
  module.exports = {
    theme: {
      // ...
    },
    plugins: [
      require('@tailwindcss/typography')({
        className: 'wysiwyg',
      }),
    ]
    ...
  }
```

Now every instance of product in the default class names will be replaced by your custom class name:

```
  <article class="wysiwyg wysiwyg-slate lg:wysiwyg-xl">
    <h1>My Heading</h1>
    <p>...</p>

    <div class="not-wysiwyg">
      <!-- Some example or demo that needs to be product-free -->
    </div>

    <p>...</p>
    <!-- ... -->
  </article>
```

## Customizing the CSS

If you want to customize the raw CSS generated by this plugin, add your overrides under the typography key in the theme section of your tailwind.config.js file:

```
  tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: '#333',
              a: {
                color: '#3182ce',
                '&:hover': {
                  color: '#2c5282',
                },
              },
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...
    ],
  }
```

Like with all theme customizations in Tailwind, you can also define the typography key as a function if you need access to the theme helper:

```
tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),

            // ...
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

Customizations should be applied to a specific modifier like DEFAULT or xl, and must be added under the css property. Customizations are authored in the same CSS-in-JS syntax used to write Tailwind plugins.

See the default styles for this plugin for more in-depth examples of configuring each modifier.
