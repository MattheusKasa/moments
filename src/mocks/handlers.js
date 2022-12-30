import { rest } from "msw"

const baseURL = 'https://drf-api-mattheus.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res
            (ctx.json({
                "pk": 4,
                "username": "katta",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 4,
                "profile_image": "https://res.cloudinary.com/dsa3o1dbv/image/upload/v1/media/images/file_1_djg0t1"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`. (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];