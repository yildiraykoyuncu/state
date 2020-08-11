# Mystery Room

Reveal the key!

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-interface'` | the section that contains all user interface elements |
| `<div>` |  `id='first'` | sets the `<section>`'s class to `first-class' |
| `<div>` |  `id='second'` | sets the `<section>`'s class to `second-class' |
| `<div>` |  `id='third'` | sets the `<section>`'s class to `third-class' |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `createClassName(which)` | _String_: the CSS class unique identifier | _String_: A new CSS className | this function returns the CSS className associated with a given unique identifier |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `hovercraftHandler(Event)` | _Event_: a user-generated event | _Boolean_: should the browser continue as normal? | when triggered, this handler determines which div was `mouseover`ed, uses it's id to generate a new className, and assigns that to user interface's className. The action is logged to the developer and the Browser is told to continue as normal. |

## Events

| type | attached to | callback |
| --- | --- | --- |
| `mouseover` | `id='first'` | `hovercraftHandler` |
| `mouseover` | `id='second'` | `hovercraftHandler` |
| `mouseover` | `id='third'` | `hovercraftHandler` |

## Styling

| class name | description | role |
| --- | --- | --- |
| `.first-class` | one of the possible stylings for the user interface | this page so confusing to use that you _need_ to inspect it! |
| `.second-class` | one of the possible stylings for the user interface | this page so confusing to use that you _need_ to inspect it! |
| `.second-class` | one of the possible stylings for the user interface | this page so confusing to use that you _need_ to inspect it! |
