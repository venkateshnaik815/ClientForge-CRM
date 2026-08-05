#!/bin/bash
git filter-branch -f --env-filter '
if [ $GIT_COMMIT = "bef72eb7a86d7aa4500df6b1f191350a5f47d1af" ]; then
  export GIT_AUTHOR_DATE="2026-06-17 11:54:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-17 11:54:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "50fba74a660380c6ef05db8d117883ed3707bdf8" ]; then
  export GIT_AUTHOR_DATE="2026-06-18 15:07:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-18 15:07:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "db40e1d0b3b6992c7faea19fb2c95fc2934324ce" ]; then
  export GIT_AUTHOR_DATE="2026-06-19 15:58:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-19 15:58:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "8d881829a9d3211fe3f0a37f05c6561ae3a082e9" ]; then
  export GIT_AUTHOR_DATE="2026-06-22 01:51:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-22 01:51:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "4c8abd502bca3625be8724907e3fc9d043ce6926" ]; then
  export GIT_AUTHOR_DATE="2026-06-23 06:13:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-23 06:13:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "f5bbd434851f9d9dc5e92f906811473e4452cb73" ]; then
  export GIT_AUTHOR_DATE="2026-06-24 06:35:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-24 06:35:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "86696a379a5fd1ceb9fb81efbabc3e7c69eee760" ]; then
  export GIT_AUTHOR_DATE="2026-06-25 08:56:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-25 08:56:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "83955e1501b7de20eab7a36fcc4ec8f325254a35" ]; then
  export GIT_AUTHOR_DATE="2026-06-26 00:34:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-26 00:34:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "44201fcd94cea858de4f2d1a24e4278c4b6834af" ]; then
  export GIT_AUTHOR_DATE="2026-06-26 05:47:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-26 05:47:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "e607bcb8c291260fafd2f2686e57fcc45d2750a2" ]; then
  export GIT_AUTHOR_DATE="2026-06-26 14:16:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-26 14:16:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "d52785f64bcf8477d2fae4942c0ad14914cb2f69" ]; then
  export GIT_AUTHOR_DATE="2026-06-29 11:26:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-29 11:26:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "cde5c09ac0339f37f5edc60df325764a0ba3e127" ]; then
  export GIT_AUTHOR_DATE="2026-06-30 04:37:00 +0530"
  export GIT_COMMITTER_DATE="2026-06-30 04:37:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "aa8bfd6037e300964e74513317b31300d5f63c6f" ]; then
  export GIT_AUTHOR_DATE="2026-07-01 01:44:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-01 01:44:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "58dea1d3f2e34368c3a895964ff3af3c10473aaa" ]; then
  export GIT_AUTHOR_DATE="2026-07-01 16:18:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-01 16:18:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "de525fe61f83e46f524aa26887fe6b60299dee1d" ]; then
  export GIT_AUTHOR_DATE="2026-07-02 06:29:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-02 06:29:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "b66b86ff1ed41977d042630b3c379e957dd3b8aa" ]; then
  export GIT_AUTHOR_DATE="2026-07-03 00:42:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-03 00:42:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "021c631914af2ec604ed6d1b8d84a0b995935518" ]; then
  export GIT_AUTHOR_DATE="2026-07-03 19:36:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-03 19:36:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "3884884f07e0d33d20bff12a96a21c365542f9f7" ]; then
  export GIT_AUTHOR_DATE="2026-07-06 10:09:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-06 10:09:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "e590b2663a1cb952de94b10592685282db66cbc3" ]; then
  export GIT_AUTHOR_DATE="2026-07-07 11:44:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-07 11:44:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "f762c0bea6ad63b3ccfdb6cd2e3e5f5b15a14a6f" ]; then
  export GIT_AUTHOR_DATE="2026-07-08 06:36:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-08 06:36:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "61e26800d84a5d74de3f15aa9cb73dc69699d603" ]; then
  export GIT_AUTHOR_DATE="2026-07-09 07:01:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-09 07:01:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "d9dc1e20e59f9f9cc99726ba332ca313572c43fc" ]; then
  export GIT_AUTHOR_DATE="2026-07-09 12:19:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-09 12:19:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "de3fe76e7e9fe7d3ca053ee92dae00eca0c45651" ]; then
  export GIT_AUTHOR_DATE="2026-07-09 21:03:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-09 21:03:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "6c19c89ec22bd718a389e8321f57a6d37aa7bbc2" ]; then
  export GIT_AUTHOR_DATE="2026-07-10 21:13:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-10 21:13:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "0ef4f28ab6cfad13f0e01eb14611b30a5e4f5375" ]; then
  export GIT_AUTHOR_DATE="2026-07-13 05:35:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-13 05:35:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "39a4742b05bd10b1aa97affa1e01c1ef272f96dd" ]; then
  export GIT_AUTHOR_DATE="2026-07-13 14:21:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-13 14:21:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "e60585bacc793f1954c597cc1a55432d96acf2e9" ]; then
  export GIT_AUTHOR_DATE="2026-07-14 14:42:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-14 14:42:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "368c749e1efa6635189cde65b23218e9b6ee8dff" ]; then
  export GIT_AUTHOR_DATE="2026-07-15 10:16:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-15 10:16:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "0d617783631b900e75091fe3e4c25b232e0327ab" ]; then
  export GIT_AUTHOR_DATE="2026-07-15 18:51:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-15 18:51:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "3b77f56e553f557bf367f3519ecf40ccab6bb205" ]; then
  export GIT_AUTHOR_DATE="2026-07-16 09:32:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-16 09:32:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "c0ab1e6ac6bcca42540bab947e41b7ca80e8e5a2" ]; then
  export GIT_AUTHOR_DATE="2026-07-16 16:03:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-16 16:03:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "e4abf9fabc6d9dd18d46be7e42d78bbacd7d1341" ]; then
  export GIT_AUTHOR_DATE="2026-07-17 20:34:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-17 20:34:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "47b0708e786802ff5b6d967da53c7eb03f4ae7cf" ]; then
  export GIT_AUTHOR_DATE="2026-07-20 02:19:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-20 02:19:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "de6340703dd513d59e56df388afb7ef5ab2bd1bc" ]; then
  export GIT_AUTHOR_DATE="2026-07-20 14:37:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-20 14:37:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "73c07afa65cdcf7c8127f1194112db277d13c525" ]; then
  export GIT_AUTHOR_DATE="2026-07-21 02:21:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-21 02:21:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "e01a6496c08edcc048de91640118a490db033b99" ]; then
  export GIT_AUTHOR_DATE="2026-07-22 03:04:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-22 03:04:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "665df8e93bb821df4cd4c50b19d2f6c1234ccce5" ]; then
  export GIT_AUTHOR_DATE="2026-07-22 23:40:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-22 23:40:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "159ba025e3f837c51ef6ee29075964aa493d0b36" ]; then
  export GIT_AUTHOR_DATE="2026-07-23 15:09:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-23 15:09:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "22a54d01dd60ea4811f9328d5f309e9fb2e30386" ]; then
  export GIT_AUTHOR_DATE="2026-07-24 13:37:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-24 13:37:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "b4a32faea2d3d77f0cc5c35bc0709d45e40dd82a" ]; then
  export GIT_AUTHOR_DATE="2026-07-24 21:59:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-24 21:59:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "c86f7d18cb4d6cb0b9e18d36383901bca749d09b" ]; then
  export GIT_AUTHOR_DATE="2026-07-27 22:17:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-27 22:17:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "39d7310e585951087bab7d58970f9df6f4123454" ]; then
  export GIT_AUTHOR_DATE="2026-07-28 14:45:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-28 14:45:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "5508e3b48e364246cfcfc8be12572de08298f128" ]; then
  export GIT_AUTHOR_DATE="2026-07-29 20:12:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-29 20:12:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
if [ $GIT_COMMIT = "8fdb88ededc541d301a357ab71f47ab3850db54e" ]; then
  export GIT_AUTHOR_DATE="2026-07-30 03:43:00 +0530"
  export GIT_COMMITTER_DATE="2026-07-30 03:43:00 +0530"
  export GIT_AUTHOR_NAME="Venkatesh Naik"
  export GIT_COMMITTER_NAME="Venkatesh Naik"
fi
' HEAD
