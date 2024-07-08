import { Category } from './Category'
import { Course } from "./Course";
import { Episode } from "./Episode";
import { Favorite } from "./Favorite";
import { Like } from "./Like";
import { User } from "./User";
import { Watchtime } from './WatchTime';

Category.hasMany(Course, { as: 'courses' })

Course.belongsTo(Category)
Course.belongsToMany(User, { through: Favorite })
Course.belongsToMany(User, { through: Like })
Course.hasMany(Episode, { as: 'Episodes' })
Course.hasMany(Favorite, { as: 'FavoriteUser', foreignKey: 'course_id' })

Episode.belongsTo(Course)
Episode.belongsToMany(User, { through:Watchtime })

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.belongsToMany(Course, { through: Like })
User.belongsToMany(Episode, { through: Watchtime })
User.hasMany(Favorite, { as: 'FavoriteCourse', foreignKey: 'user_id' })

export {
  Category,
  Course,
  Episode,
  Favorite,
  Like,
  User,
  Watchtime
}