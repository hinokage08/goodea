# -*- encoding: utf-8 -*-
# stub: graphql-client 0.2.3 ruby lib

Gem::Specification.new do |s|
  s.name = "graphql-client".freeze
  s.version = "0.2.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["GitHub".freeze]
  s.date = "2016-11-01"
  s.description = "A Ruby library for declaring, composing and executing GraphQL queries".freeze
  s.email = "engineering@github.com".freeze
  s.homepage = "https://github.com/github/graphql-client".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.1.0".freeze)
  s.rubygems_version = "3.0.3".freeze
  s.summary = "GraphQL Client".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activesupport>.freeze, [">= 3.0", "< 6.0"])
      s.add_runtime_dependency(%q<graphql>.freeze, [">= 0.19.2"])
      s.add_development_dependency(%q<actionpack>.freeze, [">= 3.2.22", "< 6.0"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.9"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 11.2"])
      s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.42"])
    else
      s.add_dependency(%q<activesupport>.freeze, [">= 3.0", "< 6.0"])
      s.add_dependency(%q<graphql>.freeze, [">= 0.19.2"])
      s.add_dependency(%q<actionpack>.freeze, [">= 3.2.22", "< 6.0"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.9"])
      s.add_dependency(%q<rake>.freeze, ["~> 11.2"])
      s.add_dependency(%q<rubocop>.freeze, ["~> 0.42"])
    end
  else
    s.add_dependency(%q<activesupport>.freeze, [">= 3.0", "< 6.0"])
    s.add_dependency(%q<graphql>.freeze, [">= 0.19.2"])
    s.add_dependency(%q<actionpack>.freeze, [">= 3.2.22", "< 6.0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.9"])
    s.add_dependency(%q<rake>.freeze, ["~> 11.2"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.42"])
  end
end
