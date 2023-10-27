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

## [0.3.0] - 2023-09-03

### Added

- The build-in pipe for formatting the price of cart and product items
- The build-in pipe for formatting the category of the product to uppercase
- The async pipe to display data provided by the ProductService service
- The custom pipe for sorting cart items, the ability to sort the array of items by price, quantity, and name using a select list, specifying the sorting direction using a checkbox
- CommonModule, FormsModule to SharedModule

### Changed

- The getProducts() method of the ProductService service to return a promise/observable

### Removed

- CommonModule and FormsModule modules from the imports of other modules that utilize SharedModule

## [0.4.0] - 2023-09-10

### Added

- Product card by /product/:productID that displays product's data. Title changes dynamically
- Lazy-loading for main modules
- Routing for product list, product item, product card, cart, admin panel, login page, product components in admin, orders, orders in the admin, admin dashboard
- Custom titles to each page that is configured via routing
- CanActivate Guard for order processing. The guard allows loading the functionality only if the cart is not empty
- Admin panel with dashboard, products, product form to add or edit item and orders
- Resolve guard to product form on edit
- Protection for the admin panel by CanActivate Guard
- Ability to choose the role (admin or user). User doesn't have an access to the admin panel
- Routing modules for products, cart, login page and admin
- Page not found that appears for a user that tries to access a route that is not defined

### Changed

- Store cart items in local storage

## [0.5.0] - 2023-09-24

### Added

- json-server to imitate a back-end part
- ProductsPromiseService to get, create, edit products via HttpClient
- CartObservableService to get, remove, check cart emptiness, change quantity and total cost of cart items via HttpClient
- TimingInterceptor that logs the duration of requests to the console and filters specific requests
- AppSettingsService, responsible for loading the application settings (sorting criteria). It load the settings from the file assets/app-settings.json, and upon successful loading, stores these data in local storage using the LocalStorageService; in case of an unsuccessful attempt, makes two retry attempts; If it is still not possible to load the settings due to issues with the address or the absence of data in the file, set the default settings values

### Changed

- Components that utilized ProductsService, CartService, utilize ProductsPromiseService and CartObservableService respectively

### Removed

- ProductsService, CartService

## [0.6.0] - 2023-10-15

### Added

- The state of the area Products (ProductsState) and the app state AppState
- Actions, reducer, feature and state selectors, effects for the Products area
- @ngrx/router-store, navigation using ‘GO’, ‘BACK’ actions for the Products area
- The Façade Pattern for Products

## [0.7.0] - 2023-10-24

### Added

- The reactive form for processing order
- Validation for the first name, email via synchronous validators
- A custom validator for the first name and a directive for validating email
- The ability to enable validation for address field upon selecting Self-pickup option
- The ability to add and remove additional fields for phone numbers
- A map for validation messages

## [0.8.0] - 2023-10-28

### Added

- Isolated unit tests for OrderBy pipe
- Isolated unit tests for CartObservable services
- Integration unit tests for Product component
- Shallow unit tests for App component
- Code coverage for tests

### Fixed

- Unit tests across the application
