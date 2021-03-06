'use strict'

const User = use('App/Models/User')

class UserController {

	async index({ view }) {

		const users = await User.all()

		return view.render('users.index', { 
			users : users.toJSON()
		})

	}

	async create({ view }) {

		return view.render('users.create')

	}

	async store({ request, response, session }) {

		const user = new User()

		user.firstname = request.input('firstname')
		user.lastname = request.input('lastname')
		user.username = request.input('username')
		user.email = request.input('email')
		user.password = request.input('password')

		await user.save()
		return response.redirect('/users')

	}

	async destroy({ params, session, response }) {
		const user = await User.find(params.id)
		await user.delete()

		return response.redirect('back')
	}


}

module.exports = UserController
