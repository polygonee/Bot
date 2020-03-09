import { GuildDocument } from "../../../models/guild";
import { ContentValidator } from "./content-validator";

export class BadLinkValidator implements ContentValidator {
    validate(content: string, guild: GuildDocument) {
        const isExplicit = guild.autoMod.banLinks
            .some(l => content.includes(l));
        if (isExplicit) {
            throw new Error('Message contains banned links.');
        }
    }
}