'use strict'

const Coin = use('App/Models/Coin')

class CoinController {

	async index({ view }) {

		const coins = await Coin.all()

		return view.render('coins.index', { 
			coins : coins.toJSON()
		})

	}

	async create({ view }) {

		return view.render('coins.create')

	}

	async store({ request, response, session }) {

		const coin = new Coin()

		user.firstname = request.input('firstname')
		user.lastname = request.input('lastname')
		user.username = request.input('username')
		user.email = request.input('email')
		user.password = request.input('password')

		await user.save()
		return response.redirect('/users')

	}

	async destroy({ params, session, response }) {
		const user = await Coin.find(params.id)
		await user.delete()

		return response.redirect('back')
	}

}

module.exports = CoinController
