# -*- encoding: utf-8 -*-
# stub: tinymce-rails-langs 0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "tinymce-rails-langs".freeze
  s.version = "0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Sam Pohlenz".freeze]
  s.date = "2012-03-21"
  s.description = "Seamlessly integrates TinyMCE into the Rails asset pipeline introduced in Rails 3.1.".freeze
  s.email = "sam@sampohlenz.com".freeze
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Language packs for tinymce-rails.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<tinymce-rails>.freeze, [">= 3.4.9"])
    else
      s.add_dependency(%q<tinymce-rails>.freeze, [">= 3.4.9"])
    end
  else
    s.add_dependency(%q<tinymce-rails>.freeze, [">= 3.4.9"])
  end
end
