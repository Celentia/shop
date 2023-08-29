# Changelog

## [0.0.1] - 2023-08-05

### Added

- A dummy component for learnIng how to display data
- The list of products, generated from mocked data
- The cart with several goods from mocked data to imitate a purchase
- Prettier

## [0.1.0] - 2023-08-20

### Added

- The ability to add and remove items from a cart, change their quantity, and calculate the total price and total quantity
- A directive for changing the background color of HTML tags on hover
- Disabling the button if an item is unavailable
- Clicking the "Buy" button increases the quantity of an item already added to the cart
- Directive ngStyle for changing font weight of total price and total quantity values

### Changed

- The app has been divided into modules: cart, orders, products, shared, and first
- The app's title is derived from a template variable
- The AppComponent become standalone

## [0.2.0] - 2023-08-29

### Added

- Methods to clear the cart and return a boolean value is the cart empty/not empty
- Service to store a settings object (id, login, email, ...)
- Service in the form of a ready-made object literal, registered using useValue
- Service to generate a random sequence of characters of length n from the set a-z, A-Z, 0-9, function that will provide the generated string, a token called generatedString
- Generator which should return an infinite sequence of integers
- Service which will allow working with window.localStorage
- Directive to change font properties on click using ElementRef + Renderer2
