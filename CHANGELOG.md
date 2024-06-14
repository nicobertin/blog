# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Add `good_job` gem to manage background jobs (c3144bd8)
- Database migration to support `good_job (c3144bd8)
- Configured GoodJob initializer with custom settings (c3144bd8)
- Add `dotenv` gem to manage environment variables

### Changed
- Updated `cable.yml` to use `async` adapter for `production`, `development`, and `test` environments instead of `redis` (c3144bd8)
- Update `schema.rb` to include `good_jobs` tables (c3144bd8)
- Update `application.rb` to include `dotenv` and load environment variables

### Removed
- Removed `redis` gem as it is no longer needed for background jobs (c3144bd8)
- Removed `credentials.yml.enc` and `master.key` as they are no longer needed