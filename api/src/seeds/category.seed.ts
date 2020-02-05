import Bluebird from 'bluebird';

import { Category } from '../models';
import categories from './data/category.json';

export default async () => {
    await Category.deleteMany({});

    await Bluebird.each(categories, async category => {
        await Category.create(category);
    });
}
