import { Request, Response} from 'express'


export default class ExpressRenderAdapter {
    static render(path: string) {
       return (req: Request, res: Response) => {
           res.type('html')
            res.render(path, { title: 'accueil'})
        }
    }
}
