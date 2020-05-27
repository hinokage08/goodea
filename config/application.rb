require_relative 'boot'

require 'rails/all'
require 'graphql/client'
require 'graphql/client/http'
require 'wikipedia'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Goodea
  class Application < Rails::Application
    config.serve_static_assets = false
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.i18n.default_locale = :ja

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.tinymce.install = :compile

    config.active_job.queue_adapter = :sidekiq
  end

  AUTH_HEADER = "Bearer pztpeEANhMf6mjT4ZTDOOdVbQiyAfLLELaiULX4ZipE"
  HTTPAdapter = GraphQL::Client::HTTP.new("https://api.annict.com/graphql") do
    def headers(context)
      { "Authorization": AUTH_HEADER }
    end
  end  
  
  unless File.exist?('./schema.json')
    GraphQL::Client.dump_schema(HTTPAdapter, './schema.json')
  end
  
  # GraphQLクライアントを生成
  Client = GraphQL::Client.new(
    execute: HTTPAdapter,
    schema: GraphQL::Client.load_schema(HTTPAdapter)
  )

  TwClient = Twitter::REST::Client.new do |config|
    config.consumer_key = ENV['TWITTER_KEY']
    config.consumer_secret = ENV['TWITTER_SECRET']
    config.access_token = ENV['TWITTER_ACCESS_TOKEN']
    config.access_token_secret =ENV['TWITTER_ACCESS_TOKEN_SECRET']
  end

end