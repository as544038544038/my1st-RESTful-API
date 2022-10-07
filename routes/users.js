import express from 'express';
import {
  creatUser,
  getUsers,
  getUser,
  delUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - age
 *         - id
 *       properties:
 *         firstname:
 *           type: string
 *           description: The user's firstname
 *         lastname:
 *           type: string
 *           description: The user's lastname
 *         age:
 *           type: Integer
 *           description: The user's age
 *         id:
 *           type: string
 *           description: The user's specific id
 *       example:
 *         firstname: John
 *         lastname: Doe
 *         age: 17
 *         id: 550e8400-e29b-41d4-a716-446655440000
 *
 *     UserInput:
 *       required:
 *         - firstname
 *         - lastname
 *         - age
 *       properties:
 *         firstname:
 *           type: string
 *           description: The user's firstname
 *         lastname:
 *           type: string
 *           description: The user's lastname
 *         age:
 *           type: Integer
 *           description: The user's age
 *       example:
 *         firstname: Amy
 *         lastname: Kate
 *         age: 52
 * */

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: The Users search api.
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Return all users with list.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A JSON array of user names.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', getUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: The user was created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error.
 */
router.post('/', creatUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by id.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user search by id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user not found.
 */
router.get('/:id', getUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Delete the user by id.
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    responses:
 *      200:
 *        description: The user delete by id.
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 */
router.delete('/:id', delUser);

/**
 * @swagger
 * /users/{id}:
 *  patch:
 *    summary: Update the user by id.
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserInput'
 *    responses:
 *      200:
 *        description: The user update by id.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: The user not found.
 */
router.patch('/:id', updateUser);

export default router;
