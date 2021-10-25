import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Coordinate from 'App/Models/Coordinate'

export default class CoodinatesController {
  public async create({ request }: HttpContextContract) {
    const { latitude, longitude, address } = request.only(['latitude', 'longitude', 'address'])
    const coordinates = await Coordinate.create({
      latitude,
      longitude,
      address,
    })

    console.log(coordinates)
    return coordinates
  }

  public async getAllCoordinates() {
    const allCoordinates = Coordinate.all()
    return allCoordinates
  }
}
