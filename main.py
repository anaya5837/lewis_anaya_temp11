while True:
    print("Light Level: " + input.light_level())
    if input.light_level() < 5:
        light.set_all(light.rgb(100, 100, 100))
    else: 
        light.clear
