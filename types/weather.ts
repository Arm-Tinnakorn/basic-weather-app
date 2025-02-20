export  interface WeatherData {
    name: string
    main: {
        temp: number,
        temp_min: number,
        temp_max: number,
        humidity: number,
        feels_like: number,
    },
    weather: Array<{
        main: string,
        description: string,
        icon: string,
    }>,
    wind: {
        speed: number,
    }
}