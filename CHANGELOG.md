# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Add and install `good_job` gem to manage background jobs. ([commit hash])
- Database migration to support `good_job`. ([commit hash])
- Configured GoodJob initializer with custom settings.

### Changed
- Updated `cable.yml` to use `async` adapter for `production`, `development`, and `test` environments instead of `redis`. ([commit hash])
- Update `schema.rb` to include `good_jobs` tables. ([commit hash])

### Removed
- Removed `redis` gem as it is no longer needed for background jobs. ([commit hash])
