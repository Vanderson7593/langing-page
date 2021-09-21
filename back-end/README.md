### Installation Instructions

1. Create a MySQL database for the project
    - `mysql -u root -p`, if using Vagrant: `mysql -u homestead -psecret`
    - `create database leospa;`
    - `\q`
2. Configure your `.env` file (update Mysql port to 3306)
3. Run `composer update` from the projects root folder
4. From the projects root folder run `php artisan migrate`

### Run

To run the server:

```
php artisan serve
```
