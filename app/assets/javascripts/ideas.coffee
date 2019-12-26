# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  Tags.bootstrapVersion = '3'
  $('#idea_tag').tags
    tagSize: 'sm'
    suggestions: [
      'alpha'
      'bravo'
      'charlie'
      'delta'
      'echo'
      'foxtrot'
      'golf'
      'hotel'
      'india'
    ]
    tagData: [
      'juliett'
      'kilo'
    ]
  return