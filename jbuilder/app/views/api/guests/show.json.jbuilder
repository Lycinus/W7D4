json.extract! @guest, :name, :age, :favorite_color

# json.gifts do
json.extract! @guest, :gifts
# end

# json.extract! @guest, :gifts do |gift|
#   json.title
#   json.description
# end
