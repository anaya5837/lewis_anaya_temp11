while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() < 5) {
        light.setAll(light.rgb(100, 100, 100))
    } else {
        light.clear
    }
    
}
