/**
 * Fonte unica di verità per i progetti.
 * Per aggiungere un progetto basta copiare la struttura di uno esistente, modificare i campi e aggiungere un nuovo oggetto all'array.
 * Il campo `expandable` indica se il progetto ha una sezione dettagliata espandibile o meno.
 * Il campo `featured` indica se il progetto è in evidenza nella homepage.
 * I link possono essere esterni (con `external: true`) o interni (con `external: false`).
 */

export const PROJECTS = [
    {
        id: 'raspberry',
        featured: true,
        titleIt: 'Home Server su Raspberry Pi 5',
        titleEn: 'Raspberry Pi 5 Home Server',
        shortDescIt: 'Un computer grande come un pacchetto di sigarette che fa girare un ecosistema completo di servizi self-hosted, privacy-oriented e sempre online.',
        shortDescEn: 'A computer the size of a pack of cigarettes running a complete self-hosted, privacy-oriented ecosystem — always on.',
        tags: ['Raspberry Pi', 'Docker', 'Linux', 'Self-hosting', 'Privacy'],
        expandable: true,
        detailsIt: {
            intro: 'Ogni servizio gira in un container Docker isolato, gestito tramite Portainer. La maggior parte di questi servizi hanno un layer aggiuntivo di sicurezza fornito da Authentik.',
            services: [
                { name: 'Mailcow', desc: 'Server mail completo con SMTP, IMAP, webmail e antispam', icon: 'mail' },
                { name: 'Nextcloud', desc: 'Drive, calendario, contatti, attività e videochiamate (Talk)', icon: 'cloud' },
                { name: 'Vaultwarden', desc: 'Password manager self-hosted compatibile con Bitwarden', icon: 'lock' },
                { name: 'Jellyfin', desc: 'Media server per streaming di film e serie', icon: 'play' },
                { name: 'Authentik', desc: 'Identity provider SSO con 2FA per tutti i servizi', icon: 'shield' },
                { name: 'Affine', desc: 'Whiteboard e note collaborative', icon: 'edit' },
                { name: 'Grafana + Prometheus + Loki', desc: 'Stack completo di monitoring e logging', icon: 'chart' },
                { name: 'Syncthing', desc: 'Sincronizzazione file tra dispositivi, con rclone notturno su Backblaze B2', icon: 'sync' },
                { name: 'Pi-hole + Unbound', desc: 'DNS locale con ad-blocking e resolver ricorsivo privato', icon: 'dns' },
                { name: 'TeamSpeak', desc: 'Server vocale per sessioni di gaming con amici', icon: 'mic' },
                { name: 'Fail2ban', desc: 'Protezione automatica da attacchi brute-force e DoS', icon: 'ban' },
            ],
        },
        detailsEn: {
            intro: 'Every service runs in an isolated Docker container, managed via Portainer. The majority of these services have an additional layer of security provided by Authentik.',
            services: [
                { name: 'Mailcow', desc: 'Full mail server with SMTP, IMAP, webmail and antispam', icon: 'mail' },
                { name: 'Nextcloud', desc: 'Drive, calendar, contacts, tasks and video calls (Talk)', icon: 'cloud' },
                { name: 'Vaultwarden', desc: 'Self-hosted password manager, Bitwarden compatible', icon: 'lock' },
                { name: 'Jellyfin', desc: 'Media server for movies and TV streaming', icon: 'play' },
                { name: 'Authentik', desc: 'SSO identity provider with 2FA for all services', icon: 'shield' },
                { name: 'Affine', desc: 'Collaborative whiteboard and note-taking', icon: 'edit' },
                { name: 'Grafana + Prometheus + Loki', desc: 'Full monitoring and logging stack', icon: 'chart' },
                { name: 'Syncthing', desc: 'File sync across devices, with nightly rclone to Backblaze B2', icon: 'sync' },
                { name: 'Pi-hole + Unbound', desc: 'Local DNS with ad-blocking and private recursive resolver', icon: 'dns' },
                { name: 'TeamSpeak', desc: 'Voice server for gaming sessions with friends', icon: 'mic' },
                { name: 'Fail2ban', desc: 'Automatic protection against brute-force and DoS attacks', icon: 'ban' },
            ],
        },
        links: [
            { labelIt: 'Status Page', labelEn: 'Status Page', url: 'https://uptime.rikicatte.it/status/services', icon: 'status', external: true },
        ],
    },
    {
        id: 'discord-bot',
        featured: true,
        titleIt: 'Bot Discord',
        titleEn: 'Discord Bot',
        shortDescIt: 'Bot Discord sviluppato in Node.js con discord.js e MongoDB, in costante sviluppo. Unico maintainer. Repository non ancora pubblica.',
        shortDescEn: 'Discord bot built with Node.js, discord.js and MongoDB, under active development. Sole maintainer. Repository not yet public.',
        tags: ['Node.js', 'discord.js', 'JavaScript', 'MongoDB', 'Beta'],
        expandable: false,
        links: [
            { labelIt: 'Repository privata', labelEn: 'Private repository', url: null, icon: 'lock', external: false },
        ],
    },
    {
        id: 'discord-bot-dashboard',
        featured: false,
        titleIt: 'Dashboard Bot Discord',
        titleEn: 'Discord Bot Dashboard',
        shortDescIt: 'Pannello di controllo web per il bot Discord, sviluppato in Next.js, permette di configurare le funzionalità del bot e visualizzare statistiche. In sviluppo, Repository non ancora pubblica.',
        shortDescEn: 'Web dashboard for the Discord bot, built with Next.js, allowing configuration of bot features and visualization of statistics. Under development, repository not yet public.',
        tags: ['Next.js', 'React', 'TypeScript', 'Dashboard'],
        expandable: false,
        links: [
            { labelIt: 'Repository privata', labelEn: 'Private repository', url: null, icon: 'lock', external: false },
        ],
    },
    {
        id: 'gestionale-csharp',
        featured: false,
        titleIt: 'Gestionale Magazzino',
        titleEn: 'Warehouse Management System',
        shortDescIt: 'Applicativo desktop C# (.NET, Windows Forms) con database MySQL per la gestione del magazzino di un\'azienda.',
        shortDescEn: 'Desktop application in C# (.NET, Windows Forms) backed by MySQL, managing warehouse inventory for a company.',
        tags: ['C#', '.NET', 'Windows Forms', 'MySQL'],
        expandable: false,
        links: [
            { labelIt: 'Repository privata', labelEn: 'Private repository', url: null, icon: 'lock', external: false },
        ],
    },
    {
        id: 'progetto-biblioteca',
        featured: false,
        titleIt: 'Progetto Biblioteca',
        titleEn: 'Library Project',
        shortDescIt: 'Single page application in React e Vite per la gestione di una biblioteca, con backend in Node.js, Express e MongoDB. Progetto accademico, non più in sviluppo attivo. Repository non ancora pubblica.',
        shortDescEn: 'Single page application in React and Vite for managing a library, with a backend in Node.js, Express and MongoDB. Academic project, no longer under active development. Repository not yet public.',
        tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
        expandable: false,
        links: [
            { labelIt: 'Repository privata', labelEn: 'Private repository', url: null, icon: 'lock', external: false },
        ],
    },
    {
        id: 'github-misc',
        featured: false,
        titleIt: 'Altri Progetti',
        titleEn: 'Other Projects',
        shortDescIt: 'Script, tool e progetti minori open source — da utility Bash a piccoli esperimenti. (non ancora disponibili su github).',
        shortDescEn: 'Scripts, tools and minor open-source projects — from Bash utilities to small experiments. (not yet available on GitHub).',
        tags: ['GitHub', 'Open Source', 'Scripts', 'Tools', 'Shell'],
        expandable: false,
        links: [
            { labelIt: 'GitHub', labelEn: 'GitHub', url: 'https://github.com/RikiCatte', icon: 'github', external: true },
        ],
    },
]

export const PORTFOLIO_META = {
    lastUpdateIt: 'Maggio 2026',
    lastUpdateEn: 'May 2026',
}