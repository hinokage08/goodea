# -*- encoding: utf-8 -*-
# stub: imgkit 1.6.2 ruby lib

Gem::Specification.new do |s|
  s.name = "imgkit".freeze
  s.version = "1.6.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["csquared".freeze]
  s.date = "2019-03-19"
  s.description = "Uses wkhtmltoimage to create Images using HTML".freeze
  s.email = "christopher.continanza@gmail.com".freeze
  s.executables = ["imgkit".freeze]
  s.files = ["bin/imgkit".freeze]
  s.homepage = "https://github.com/csquared/IMGKit".freeze
  s.post_install_message = "******************************************************************\n\nNow install wkhtmltoimage binaries:\nGlobal: sudo `which imgkit` --install-wkhtmltoimage\n        rvmsudo imgkit --install-wkhtmltoimage\n(installs to default /usr/local/bin/wkhtmltoimage)\n\ninside RVM folder: export TO=`which imgkit | sed 's:/imgkit:/wkhtmltoimage:'` && imgkit --install-wkhtmltoimage\n(you'll have to configure the location of the binary if you do this!)\n\n(run imgkit --help to see more options)\n******************************************************************\n".freeze
  s.rubygems_version = "3.0.3".freeze
  s.summary = "HTML+CSS -> JPG".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version
end
