import { Category } from './Category'
import { Course } from "./Course";
import { Episode } from "./Episode";
import { Favorite } from "./Favorite";
import { Like } from "./Like";
import { User } from "./User";

Category.hasMany(Course, { as: 'Course' })

Course.belongsTo(Category)
Course.belongsToMany(User, { through: Favorite })
Course.belongsToMany(User, { through: Like })
Course.hasMany(Episode, { as: 'Episodes' })
Course.hasMany(Favorite, { as: 'FavoriteUser', foreignKey: 'course_id' })

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.belongsToMany(Course, { through: Like })
User.hasMany(Favorite, { as: 'FavoriteCourse', foreignKey: 'user_id' })

export {
  Category,
  Course,
  Episode,
  Favorite,
  Like,
  User
}