import { Command, CommandContext, Permission } from './command';


export default class DashboardCommand implements Command {
    name = 'dashboard';
    summary = `Get a link to the server's dashboard`;
    precondition: Permission = 'MANAGE_GUILD';
    cooldown = 3;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        return ctx.channel.send(`Server's dashboard <a:righter_arrow:793184978313674772> ${ process.env.DASHBOARD_URL}/servers/${ctx.guild.id}`);
    }
}
