if instance == @guests
  json.array! instance, :name, :age, :favorite_color
else
  json.extract! instance, :name, :age, :favorite_color
end
