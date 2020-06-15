require 'redis'
uri = URI.parse(ENV.fetch("REDIS_URL", "http://localhost:6379"))
REDIS = Redis.new(host: uri.host, port: uri.port)