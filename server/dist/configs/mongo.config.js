"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoDbConfig = void 0;
const getMongoDbConfig = (configService) => (Object.assign({ uri: getMongoString(configService) }, getMongoOptions()));
exports.getMongoDbConfig = getMongoDbConfig;
const getMongoString = (configService) => 'mongodb://' +
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTHDATABASE');
const getMongoOptions = () => ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//# sourceMappingURL=mongo.config.js.map