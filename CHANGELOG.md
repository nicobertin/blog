# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `fly.toml` for deployment to Fly.io.
- `good_job` gem to manage background jobs.
- `dotenv` gem to manage environment variables.
- `stackprof`, `sentry-ruby` and `sentry-rails` gems for profiling and error tracking.
- `dockerfile-rails` gem for building a Docker image.
- `jwt` gem for encoding and decoding JWTs.
- `bcrypt` gem for password hashing.
- `good_job.rb` initializer with custom settings.
- `sentry.rb` initializer with custom settings.
- `PagesController` with `home` action and view.
- `AuthenticationController` with `login` action.
- `AdminController` with `login` view and `logout` action.
- `user.rb` model with `has_secure_password` and `validates` methods.
- `JsonWebToken` module for encoding and decoding JWTs.
- `flash_controller.js` and `login_controller.js` for handling flash messages and login form.
- `flash.css` for custom flash messages and `login.css` for login page.
- `icons.woff2` imported from `google-icons` for custom icons.
- `_flash` partial for rendering flash messages and `_navbar` partial for rendering the navbar.

### Changed
- `cable.yml` to use async adapter for all environments instead of redis.
- `application.rb` to include `dotenv` and load environment variables, and `good_job` for background jobs.
- `routes.rb` to route root to `PagesController#home`.
- `application_controller.rb` to include `JsonWebToken` module and handle JWTs.
- `application.css` to include `google-icons` in the asset pipeline.
- `application.html.erb` to include `_flash` and `_navbar` partials and `Bootstrap`CDN.

### Removed
- `redis` gem as it is no longer needed for background jobs.
- `credentials.yml.enc` and `master.key` as they are no longer needed.