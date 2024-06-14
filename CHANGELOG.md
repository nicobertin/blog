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
- `good_job.rb` initializer with custom settings.
- `sentry.rb` initializer with custom settings.
- `PagesController` with `home` action and view.

### Changed
- `cable.yml` to use async adapter for all environments instead of redis.
- `application.rb` to include `dotenv` and load environment variables.
- `routes.rb` to route root to `PagesController#home`.

### Removed
- `redis` gem as it is no longer needed for background jobs.
- `credentials.yml.enc` and `master.key` as they are no longer needed.