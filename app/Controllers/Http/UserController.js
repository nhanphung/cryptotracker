'use strict'

class UserController {

	async index({ view }) {
		const users = [
			{ 'username' : 'ntphung', 'email' : 'ntphung@crypto.com' },
			{ 'username' : 'ptran', 'email' : 'ptran@crypto.com' },
			{ 'username' : 'tnguyen', 'email' : 'tnguyen@crypto.com' },
			{ 'username' : 'dnguyen', 'email' : 'dnguyen@crypto.com' }
		]

		return view.render('users.index', { 
			users : users
		})
	}

	async create({ view }) {

	}


}

module.exports = UserController