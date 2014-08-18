json.array!(@houses) do |house|
  json.extract! house, :id, :address, :longitude, :latitude
  json.url house_url(house, format: :json)
end
