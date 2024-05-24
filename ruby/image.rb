
# image.rb
require 'sinatra'
require 'rmagick'
require 'json'
require 'rack/cors'

# Allow all origins for all routes
use Rack::Cors do
  allow do
    origins '*'  # Allow requests from any origin
    resource '*'  # Allow all resources
  end
end

def process_image(image_path)
  image = Magick::Image.read(image_path).first
  dimension = 128
  # Check if the image is exactly 96x96
  if image.rows != dimension || image.columns != dimension
    puts "Image #{image_path} is not exactly #{dimension}x#{dimension}"
    puts "This image will be skipped"
    return
  end

    # Rotate image 90 degrees clockwise
    image = image.rotate(-90)

    # Flip image horizontally
    image = image.flip
    
  rows = []

  0.step(image.rows - 1, 4) do |i|
    cols = []
    0.step(image.columns - 1, 4) do |j|
      pixel = image.pixel_color(i + 2, j + 2)

      case pixel.intensity
      when 0..5910
        cols << 0
      when 5910..26213
        cols << 1
      else
        cols << 2
      end
    end
    rows << cols
  end

  rows
end


get '/logo_data' do
  content_type :json
  result = process_image("nextjs.svg")
  result.to_json
end


#ruby app.rb
