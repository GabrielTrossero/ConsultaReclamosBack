import {Router} from 'express';
const router = Router();

import * as redmineController from './redmine.controller'; //me traigo todo lo de redmine.controller

router.get('/redmine/:id', redmineController.getRequerimiento);

export default router