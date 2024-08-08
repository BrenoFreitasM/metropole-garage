-- CreateThread(function ()
--     while true do
--         Wait(500)
--         print(GlobalState.counter)
--     end
-- end)

-- AddStateBagChangeHandler('counter', 'global', function (bagName, key, value, reserved, replicated)
--     print(bagName, key, value, reserved, replicated)
-- end)


-- Client 
-- LocalPlayer.state:set('foo', 'bar', true)


--  Exemplo como usar player State e refleti-lo no servidor com uso de statebags --
-- RegisterCommand('clinc', function ()
--     local oldCounter = LocalPlayer.state.counter or 0

--     LocalPlayer.state:set('counter', (oldCounter + 1), true)
-- end)

----- Verificando qual ultimo jogador que entrou no veiculo ----
-- RegisterCommand('getlastdriver', function ()
--     local entityId = exports.raycast:GetHitEntity()

--     print(Entity(entityId).state.lastDriver)
-- end)