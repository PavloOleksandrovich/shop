import Bluebird from 'bluebird';
import fs from 'fs';
import path from 'path';
import util from 'util';
import mongoose from 'mongoose';

import { connectMongo } from '../utils';

const readdir = util.promisify(fs.readdir);

connectMongo(async () => {
	const files = (await readdir(__dirname))
		.filter(file => {
			return file !== path.basename(__filename) && file !== 'data';
		});

	await Bluebird.each(files, async file => {
		await require(`./${file}`).default();
	});

	mongoose.disconnect();
});
