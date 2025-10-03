import { test } from '@playwright/test';
require('dotenv').config();
const SqliteUtils = require('./utils/SqliteUtils');

// async function testConnection() {
//     try {
//         await SqliteUtils.createConnection();
//         const artists = await SqliteUtils.runQuery('SELECT * FROM Artist LIMIT 5');
//         console.log(artists);

//     } finally {
//         await SqliteUtils.closeConnection();
//     }
// }

test("Sqlite connection test", async () => {
    try {
        await SqliteUtils.createConnection();
        const artists = await SqliteUtils.runQuery('SELECT * FROM Artist LIMIT 5');
        console.log(artists);
        console.log(artists[0])
        const firstArtist = artists[0];
        test.expect(artists.length).toBeGreaterThan(0);
        test.expect(firstArtist).toHaveProperty('ArtistId');
        test.expect(firstArtist).toHaveProperty('Name');
        console.log("firstname = "+firstArtist.Name)

    } finally {
        await SqliteUtils.closeConnection();
    }
});
