from PIL import Image
from collections import Counter

# input_path = "logo-orig.png"
# background_color = (0, 0, 0)
#output_path = "logo.png"

# input_path = "logo-with-name-orig.png"
# background_color = (255, 255, 255)
# output_path = "logo-with-name.png"

input_path = "patchline-orig.png"
background_color = (0,0,0)
output_path = "patchline.png"


def is_color_background(color):
    if 'patchline' in input_path:
        return is_black_shade(color)
    return color == background_color


def most_frequent_color(image):
  pixels = image.getdata()
  color_counts = Counter(pixels)
  most_common_color = color_counts.most_common(1)[0]
  return most_common_color


def is_black_shade(pixel, threshold=20):
  r, g, b = pixel
  return r <= threshold and g <= threshold and b <= threshold


def make_transparent(input_image, output_image):
    try:
        img = Image.open(input_image).convert("RGBA")
        # print(most_frequent_color(img))
        data = list(img.getdata())

        new_data = []
        for item in data:
            if is_color_background(item[:3]):
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append((0,0,0,255))

        img.putdata(new_data)
        img.save(output_image, "PNG")
        print(f"Image saved successfully to {output_image}")

    except FileNotFoundError:
        print(f"Error: Input image file '{input_image}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    make_transparent(input_path, output_path)